import { Selector } from 'testcafe';
import {
    cerrarSesion360,
    ingresarAplicacion,
    cerrarPestana360
} from '../../Funciones/HelpersHgi360.js';
import { testAdminConfig } from '../../ParametrosPruebas/TestErpAdmin8902.js'; 

const CONSULTA_IA = 'hola';

fixture `Prueba IA Test Hgi360 Admin`
    .page (testAdminConfig.pagina)

test('Prueba Respuesta IA Test Hgi360', async t => {
    await ingresarAplicacion(t, testAdminConfig);
    await t
        .click(Selector('a').withText('IA'))    
        .click(Selector('span').withText('INTELIGENCIA ARTIFICIAL'))
        .wait(1500)
        .switchToIframe(Selector('iframe').withAttribute('id', /^iframe_tab_/))
        .wait(1500)
        .typeText('#ConsultaIA .dx-texteditor-input', CONSULTA_IA)
        .click('#IAConsultar .dx-icon.dx-icon-arrowup')
        .wait(5000)
        .expect((Selector('#RespuestaIA .text').nth(1)).exists).ok()
    await cerrarPestana360(t);
    await cerrarSesion360(t);
 });