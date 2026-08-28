import { Selector } from 'testcafe';
import {
    cerrarPestana360,
    cerrarSesion360,
    abrirProcesos360,
    confirmarProceso,
    aceptarValidacionesSiExisten,
    iframeTab,
    ingresarAplicacion,
    mostrarMenu360
} from '../../Funciones/HelpersHgi360.js';
import { miAdminConfig } from '../../ParametrosPruebas/MiErpAdmin8787.js';
import { testAdminConfig } from '../../ParametrosPruebas/TestErpAdmin8902.js';


async function ejecutarPrueba(t, config, ingresar) {
    await ingresar(t, config);
    
        // CARTERA
        await abrirProcesos360(t, 'Cartera');
        await t.wait(15000);
        await confirmarProceso(t);
    
        // PEDIDOS
        await mostrarMenu360(t);
        await abrirProcesos360(t, 'Pedidos');
        await t.wait(5000);
        await confirmarProceso(t);

        // INVENTARIO
        await mostrarMenu360(t);
        await abrirProcesos360(t, 'Inventario');
        await t.wait(3000);
        await t.click(Selector('#ModalValidaciones button').withText('Aceptar')).wait(1500);
        await t.click(Selector('#ModalValidaciones button').withText('Aceptar')).wait(1500);
        await confirmarProceso(t);
    

        // INVENTARIO CON SALDO INICIAL
        await mostrarMenu360(t);
        await abrirProcesos360(t, 'Inventario con saldo inicial');
        await t.wait(15000);
        await t.click(Selector('#ModalValidaciones button').withText('Aceptar')).wait(1500);
        await t.click(Selector('#ModalValidaciones button').withText('Aceptar')).wait(1500);
        await confirmarProceso(t);
        await cerrarSesion360(t);
}

fixture `Prueba Procesos - Test Hgi360`
    .page(testAdminConfig.pagina);

test('Prueba ejecucion todos los procesos Test Hgi360 - Test Hgi360', async t => {
    await ejecutarPrueba(t, testAdminConfig, ingresarAplicacion);
});
/*
fixture `Prueba Procesos - Mi ERP`
    .page(miAdminConfig.pagina);

test('Prueba ejecucion todos los procesos Test Hgi360 - Mi ERP', async t => {
    await ejecutarPrueba(t, miAdminConfig, ingresarAplicacion);
});*/
