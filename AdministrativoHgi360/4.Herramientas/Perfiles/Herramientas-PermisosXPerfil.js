import { Selector } from 'testcafe';
import {
    abrirHerramientas360,
    cerrarSesion360,
    ingresarAplicacion,
    seleccionarOpcion,
    cerrarPestana360
} from '../../../Funciones/HelpersHgi360.js';
import { miAdminConfig } from '../../../ParametrosPruebas/MiErpAdmin8787.js';
import { testAdminConfig } from '../../../ParametrosPruebas/TestErpAdmin8902.js';

const PERFIL = '0001 - MiNuevaDescPerfilQA2';

async function ejecutarPrueba(t, config, ingresar) {
    await ingresar(t, config);
        await abrirHerramientas360(t, 'Permisos X Perfil');
        await t
            .wait(3000)
            .click('#PermisosPerfil_Perfil .dx-lookup-field')
            ;
    await seleccionarOpcion(t, PERFIL);
    await t
            .wait(3000)
            .click(Selector('#treeListOpcionesPermisosPerfil .dx-treelist-empty-space.dx-treelist-collapsed'))
            .click('#Consultar_23 .dx-checkbox-icon')
            .click('#Editar_23101 .dx-checkbox-icon')
            .click('#Crear_23102 .dx-checkbox-icon')
            .click('#Eliminar_231023 .dx-checkbox-icon')
            .click('#Anular_23103 .dx-checkbox-icon')
            .click('#Imprimir_23104 .dx-checkbox-icon')
            .click('#Gestion_23105 .dx-checkbox-icon')
            .click('#Servicios_23106 .dx-checkbox-icon')
            .click(Selector('#BtnGuardarPermisosPerfil span').withText('Guardar'))
            .click(Selector('button').withText('Aceptar'))
        await cerrarPestana360(t);
        await cerrarSesion360(t);
}

fixture `Prueba Herramientas Permisos - Test Hgi360`
    .page(testAdminConfig.pagina);

test('Prueba Herramientas - Permisos x Perfil - Test Hgi360', async t => {
    await ejecutarPrueba(t, testAdminConfig, ingresarAplicacion);
});

fixture `Prueba Herramientas Permisos - Mi ERP`
    .page(miAdminConfig.pagina);

test('Prueba Herramientas - Permisos x Perfil - Mi ERP', async t => {
    await ejecutarPrueba(t, miAdminConfig, ingresarAplicacion);
});
