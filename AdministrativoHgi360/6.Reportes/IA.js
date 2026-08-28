import { Selector } from 'testcafe';
import { cerrarSesion360, ingresarAplicacion, cerrarPestana360 } from '../../Funciones/HelpersHgi360.js';
import { testHappgiAdminConfig } from '../../ParametrosPruebas/TestHappgiAdmin8902.js'; 

const CONSULTA_IA = 'hola';

fixture `Prueba IA testhappgi Admin`
    .page (testHappgiAdminConfig.pagina)

test('Prueba Respuesta IA testhappgi', async t => {
    await ingresarAplicacion(t, testHappgiAdminConfig);
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