import { profiler } from "cc";
import { Layout_UI_HUD } from "./Layout_HUD";
import { GameUILayers } from "../../scripts/GameUILayers";
import { UI_AboutMe } from "../../scripts/UIDef";
import { UI_DemoList } from "../ui_demo_list/UI_DemoList";

export class UI_HUD extends tgx.UIController {
    constructor() {
        super('ui_hud/UI_HUD', GameUILayers.HUD, Layout_UI_HUD);
    }

    public getRes(): [] {
        return [];
    }

    //子类的所有操作，需要在这个函数之后。
    protected onCreated() {
        let layout = this._layout as Layout_UI_HUD;

        this.onButtonEvent(layout.btnScenes, this.onSceneChange, this);

        this.onButtonEvent(layout.btnToggleStats, this.onToggleStats, this);

        this.onButtonEvent(layout.btnAbout, () => {
            tgx.UIMgr.inst.showUI(UI_AboutMe);
        });
    }

    onToggleStats() {
        if (profiler.isShowingStats()) {
            profiler.hideStats();
        }
        else {
            profiler.showStats();
        }
    }

    onSceneChange() {
        tgx.UIMgr.inst.showUI(UI_DemoList, (ui: UI_DemoList) => {
            ui.showCloseBtn();
        });
    }

    //销毁
    protected onDispose() {

    }
    //
    protected onUpdate() {

    }
}