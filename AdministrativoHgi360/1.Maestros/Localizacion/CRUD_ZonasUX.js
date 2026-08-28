import { Selector } from 'testcafe';
import {
    ingresarAplicacion,
    abrirMaestros360,
    eliminarRegistroSiExiste,
    cerrarSesion360,
    cerrarPestana360,
    eliminarRegistroDesdeGrid
} from '../../../Funciones/HelpersHgi360.js';
import { miAdminConfig } from '../../../ParametrosPruebas/MiErpAdmin8787.js';
import { testAdminConfig } from '../../../ParametrosPruebas/TestErpAdmin8902.js';

const CODIGO = 'MiZona123';
const DESCRIPCION = 'DescripcionMiZona';
const DESCRIPCION_EDIT = 'NuevaDescripcionZona';

async function ejecutarPrueba(t, config, ingresar) {
    await ingresar(t, config);
        await abrirMaestros360(t, 'Zonas', 'localizacion');
        await eliminarRegistroSiExiste(t, '#gridZonas', CODIGO);
        await t
            .click(Selector('#gridZonas .dx-button-content').nth(1))
            .typeText('#txtZona_Codigofocus', CODIGO)
            .typeText('#txtZona_Descripcion .dx-texteditor-input', DESCRIPCION)
            .click(Selector('#BtnActualizarZona div').withText('Guardar'))
            .wait(4000)
            .expect(Selector('#gridZonas td').withText(CODIGO).exists).ok()
            .click(Selector('#gridZonas [class^="dx-button-mode-contained dx-link dx-link-edit dx-i"]').nth(1))
            .click('#txtZona_Descripcion .dx-texteditor-input')
            .pressKey('ctrl+a')
            .pressKey('backspace')
            .typeText('#txtZona_Descripcion .dx-texteditor-input', DESCRIPCION_EDIT)
            .click('#BtnActualizarZona .dx-icon.dx-icon-save')
            .wait(3000);
        await eliminarRegistroDesdeGrid(t, '#gridZonas');;
        await cerrarPestana360(t);
        await cerrarSesion360(t);
}

fixture `Prueba Zonas - Test Hgi360`
    .page(testAdminConfig.pagina);

test('Prueba Zonas Test Hgi360 CRUD - Test Hgi360', async t => {
    await ejecutarPrueba(t, testAdminConfig, ingresarAplicacion);
});

fixture `Prueba Zonas - Mi ERP`
    .page(miAdminConfig.pagina);

test('Prueba Zonas Test Hgi360 CRUD - Mi ERP', async t => {
    await ejecutarPrueba(t, miAdminConfig, ingresarAplicacion);
});
