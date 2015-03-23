/**
 * Created by zxh on 15/3/20.
 */
/**
 * Created by zxh on 15/3/18.
 */

var guideConfig = {
    tasks: {
        1: [
            {
                log: "关闭第一盏灯",
                command: sz.GuideCommand.GC_FINGER_HINT,
                locator:"_fire1"
            },

            {
                log: "关闭第二盏灯",
                command: sz.GuideCommand.GC_FINGER_HINT,
                locator:"_fire2"
            },

            {
                log: "保存进度",
                command: sz.GuideCommand.GC_SAVE_PROGRESS
            },

            {
                log: "点亮第一盏灯",
                command: sz.GuideCommand.GC_FINGER_HINT,
                locator:"_fire1"
            },

            {
                log: "点亮第二盏灯",
                command: sz.GuideCommand.GC_FINGER_HINT,
                locator:"_fire2"
            },
        ],

        2: [
            {
                log:'点击home',
                command: sz.GuideCommand.GC_FINGER_HINT,
                locator:"_btnHome"
            }
        ],

        3: [
            {
                log:'点击task',
                command: sz.GuideCommand.GC_FINGER_HINT,
                locator:"_btnTask"
            }
        ]
    },
    locateNodeDurationTime: 0.1,
    fingerImage: 'res/finger.png',
    widgetEventType: 2, //touchEnded
};