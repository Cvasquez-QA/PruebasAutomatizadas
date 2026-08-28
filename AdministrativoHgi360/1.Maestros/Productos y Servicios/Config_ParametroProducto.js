import { Selector } from 'testcafe';
import { ingresarAplicacion, cerrarSesion360, cerrarPestana360, abrirHerramientas360 } from '../../../Funciones/HelpersHgi360.js';
import { miAdminConfig } from '../../../ParametrosPruebas/MiErpAdmin8787.js'; 
import { testAdminConfig } from '../../../ParametrosPruebas/TestErpAdmin8902.js'; 


/*
+++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++
*/
fixture `Prueba Config Parametros Productos MIERP Admin`
    .page (miAdminConfig.pagina)
    
test('Prueba Config Parametros Productos miERP', async t => {
    await ingresarAplicacion(t, miAdminConfig);
    await abrirHerramientas360(t, 'Parámetros');
    await t
        .click(Selector('#PanelParametrosGenerales a').withText('Parámetros'))
        .click(Selector('#BtnEditar div').withText('Editar'))
        .wait(1000)
        .click('#TxtParametrosGenerales_Params_StrProductoParametro1 .dx-texteditor-input')
        .pressKey('ctrl+a')
        .pressKey('backspace')
        .typeText('#TxtParametrosGenerales_Params_StrProductoParametro1 .dx-texteditor-input', 'Parametro1')
    await t
        .click('#TxtParametrosGenerales_Params_StrProductoParametro2 .dx-texteditor-input')
        .pressKey('ctrl+a')
        .pressKey('backspace')
        .typeText('#TxtParametrosGenerales_Params_StrProductoParametro2 .dx-texteditor-input', 'Parametro2')
    await t
        .click('#TxtParametrosGenerales_Params_StrProductoParametro3 .dx-texteditor-input')
        .pressKey('ctrl+a')
        .pressKey('backspace')
        .typeText('#TxtParametrosGenerales_Params_StrProductoParametro3 .dx-texteditor-input', 'Parametro3')
    await t
        .click('#TxtParametrosGenerales_Params_StrProductoParametro4 .dx-texteditor-input')
        .pressKey('ctrl+a')
        .pressKey('backspace')
        .typeText('#TxtParametrosGenerales_Params_StrProductoParametro4 .dx-texteditor-input', 'Parametro4')
    await t
        .click('#TxtParametrosGenerales_Params_StrProductoParametro5 .dx-texteditor-input')
        .pressKey('ctrl+a')
        .pressKey('backspace')
        .typeText('#TxtParametrosGenerales_Params_StrProductoParametro5 .dx-texteditor-input', 'Parametro5')
    await t
        .click('#TxtParametrosGenerales_Params_StrProductoParametro6 .dx-texteditor-input')
        .pressKey('ctrl+a')
        .pressKey('backspace')
        .typeText('#TxtParametrosGenerales_Params_StrProductoParametro6 .dx-texteditor-input', 'Parametro6')    
    await t
        .click(Selector('#BtnGuardar span').withText('Guardar'))
        .click(Selector('button').withText('Aceptar'))
        await cerrarPestana360(t);
    await cerrarSesion360(t);
});
/*
+++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++
*/

fixture `Prueba ParametroProd1 testERP Admin`
    .page (testAdminConfig.pagina)
    
test('Prueba Config Parametros Productos testErp', async t => {
    await ingresarAplicacion(t, testAdminConfig);
    await abrirHerramientas360(t, 'Parámetros');
    await t
        ///.click('#tabs_parametros_Params')
        .click(Selector('#PanelParametrosGenerales a').withText('Parámetros'))
        .click(Selector('#BtnEditar div').withText('Editar'))
        .wait(1000)
        .click('#TxtParametrosGenerales_Params_StrProductoParametro1 .dx-texteditor-input')
        .pressKey('ctrl+a')
        .pressKey('backspace')
        .typeText('#TxtParametrosGenerales_Params_StrProductoParametro1 .dx-texteditor-input', 'Parametro1')
    await t
        .click('#TxtParametrosGenerales_Params_StrProductoParametro2 .dx-texteditor-input')
        .pressKey('ctrl+a')
        .pressKey('backspace')
        .typeText('#TxtParametrosGenerales_Params_StrProductoParametro2 .dx-texteditor-input', 'Parametro2')
    await t
        .click('#TxtParametrosGenerales_Params_StrProductoParametro3 .dx-texteditor-input')
        .pressKey('ctrl+a')
        .pressKey('backspace')
        .typeText('#TxtParametrosGenerales_Params_StrProductoParametro3 .dx-texteditor-input', 'Parametro3')
    await t
        .click('#TxtParametrosGenerales_Params_StrProductoParametro4 .dx-texteditor-input')
        .pressKey('ctrl+a')
        .pressKey('backspace')
        .typeText('#TxtParametrosGenerales_Params_StrProductoParametro4 .dx-texteditor-input', 'Parametro4')
    await t
        .click('#TxtParametrosGenerales_Params_StrProductoParametro5 .dx-texteditor-input')
        .pressKey('ctrl+a')
        .pressKey('backspace')
        .typeText('#TxtParametrosGenerales_Params_StrProductoParametro5 .dx-texteditor-input', 'Parametro5')
    await t
        .click('#TxtParametrosGenerales_Params_StrProductoParametro6 .dx-texteditor-input')
        .pressKey('ctrl+a')
        .pressKey('backspace')
        .typeText('#TxtParametrosGenerales_Params_StrProductoParametro6 .dx-texteditor-input', 'Parametro6')
    await t
        .click(Selector('#BtnGuardar span').withText('Guardar'))
        .click(Selector('button').withText('Aceptar'))
        await cerrarPestana360(t);
    await cerrarSesion360(t);
});
/*
+++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++
*/
