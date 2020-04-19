import Vue from 'vue'
import toast from "./toast";

let Toast = Vue.extend(toast);

export default function ({msg,type}={msg:'OK',type:1},duration=2000) {
    let app = new Toast({
        el:document.createElement('div'),
        data() {
            return {
                msg,
                type,
                fade: true,
                show: true
            }
        },
        computed: {
            classStyle() {
                switch (this.type) {
                    case 1:
                        return 'success';
                        break;
                    case 2:
                        return 'error';
                        break;
                    default:
                        return 'error';
                        break;
                }
            },
            types() {
                switch (this.type) {
                    case 1:
                        return '√';
                        break;
                    case 2:
                        return '×';
                        break;
                    default:
                        return '×';
                        break;
                }
            }
        },
    })
     document.body.appendChild(app.$el);
        setTimeout(() => {
            app.fade = false
        }, duration - 200)
        setTimeout(() => {
            app.show = false
        }, duration)
}