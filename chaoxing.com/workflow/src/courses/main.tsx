import { render } from "preact";
import { App } from "./app";

import getUserInfo from "./libs/getUserInfo";

export async function Main() {
    const navUl = $('div.tab-menu ul#basicUl');
    navUl.children().first().removeClass('active');
    navUl.prepend('<li dataid="0" class="active --lcandy2-chaoxing-workflow">视频学习</li>');

    const contentDiv = $('div#AM');
    contentDiv.children().first().css('display', 'none');
    contentDiv.prepend('<div class="con-item --lcandy2-chaoxing-workflow" id="video-main" style="display: block;"></div>');

    render(
        <App />,
        (() => {
            const app = document.createElement('div');
            $('div#video-main.--lcandy2-chaoxing-workflow').append(app);
            return app;
        })(),
    );

    const userInfo = await getUserInfo();
    console.log(userInfo);

}
