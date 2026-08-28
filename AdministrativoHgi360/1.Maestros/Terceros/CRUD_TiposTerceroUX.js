import { Selector } from 'testcafe';
import {
    seleccionarOpcion,
    ingresarAplicacion,
    abrirMaestros360,
    eliminarRegistroSiExiste,
    cerrarSesion360,
    cerrarPestana360,
    eliminarRegistroDesdeGrid
} from '../../../Funciones/HelpersHgi360.js';
import { miAdminConfig } from '../../../ParametrosPruebas/MiErpAdmin8787.js';
import { testAdminConfig } from '../../../ParametrosPruebas/TestErpAdmin8902.js';

const CODIGO = 'PruebaCodigoTipoTerc';
const DESCRIPCION = 'descTipoTercero';
const DESCRIPCION_EDIT = 'NuevaDescripciónTipoTerceros';
const PRECIO_1 = '1 - Precio 1';

async function ejecutarPrueba(t, config, ingresar) {
    await ingresar(t, config);
        await abrirMaestros360(t, 'Tipos Tercero', 'terceros');
        await eliminarRegistroSiExiste(t, '#gridTiposTerceros', CODIGO);
        await t
            .click(Selector('#gridTiposTerceros .dx-button-content').nth(1))
            .typeText('#txtIntIdTipoTercerofoco', CODIGO)
            .typeText('#txtTipoTerceros_Descripcion .dx-texteditor-input', DESCRIPCION)
            .click(Selector('#BtnGuardarTipoTerceros div').withText('Guardar'))
            .wait(2000)
            .expect(Selector('#gridTiposTerceros td').withText(CODIGO).exists).ok()
            .click(Selector('#gridTiposTerceros [class^="dx-button-mode-contained dx-link dx-link-edit dx-i"]').nth(1))
            .click('#txtTipoTerceros_Descripcion .dx-texteditor-input')
            .pressKey('ctrl+a')
            .pressKey('backspace')
            .typeText('#txtTipoTerceros_Descripcion .dx-texteditor-input', DESCRIPCION_EDIT)
            .click('#txtTiposTerceros_IntPrecio .dx-lookup-field')
            ;
    await seleccionarOpcion(t, PRECIO_1);
    await t
            .click(Selector('#BtnGuardarTipoTerceros span').withText('Guardar'))
            .wait(2000);
        await eliminarRegistroDesdeGrid(t, '#gridTiposTerceros');
        await cerrarPestana360(t);
        await cerrarSesion360(t);
}

fixture `Prueba Tipo Terceros - Test Hgi360`
    .page(testAdminConfig.pagina);

test('Prueba Tipo Tercero Test Hgi360 - Test Hgi360', async t => {
    await ejecutarPrueba(t, testAdminConfig, ingresarAplicacion);
});

fixture `Prueba Tipo Terceros - Mi ERP`
    .page(miAdminConfig.pagina);

test('Prueba Tipo Tercero Test Hgi360 - Mi ERP', async t => {
    await ejecutarPrueba(t, miAdminConfig, ingresarAplicacion);
});
