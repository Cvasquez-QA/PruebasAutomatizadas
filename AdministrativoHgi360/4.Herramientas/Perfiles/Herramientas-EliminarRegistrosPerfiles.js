import { Selector } from 'testcafe';
import {
    abrirHerramientas360,
    cerrarSesion360,
    ingresarAplicacion,
    cerrarPestana360,
    eliminarRegistroDesdeGrid
} from '../../../Funciones/HelpersHgi360.js';
import { miAdminConfig } from '../../../ParametrosPruebas/MiErpAdmin8787.js';
import { testAdminConfig } from '../../../ParametrosPruebas/TestErpAdmin8902.js';

const CODIGO_PERFIL = '0001';

async function ejecutarPrueba(t, config, ingresar) {
    await ingresar(t, config);
        await abrirHerramientas360(t, 'Perfiles');
        await t
            .typeText('#gridPerfiles .dx-texteditor-input', CODIGO_PERFIL)
            .wait(3000)
            .expect(Selector('#gridPerfiles td').withText(CODIGO_PERFIL).exists).ok('El perfil no existe');
        await eliminarRegistroDesdeGrid(t, '#gridPerfiles');
        
        await cerrarPestana360(t);
        await cerrarSesion360(t);
}

fixture `Prueba Herramientas Perfiles - Test Hgi360`
    .page(testAdminConfig.pagina);

test('Prueba Herramientas - Eliminar Registros - Test Hgi360', async t => {
    await ejecutarPrueba(t, testAdminConfig, ingresarAplicacion);
});

fixture `Prueba Herramientas Perfiles - Mi ERP`
    .page(miAdminConfig.pagina);

test('Prueba Herramientas - Eliminar Registros - Mi ERP', async t => {
    await ejecutarPrueba(t, miAdminConfig, ingresarAplicacion);
});
