import Vue from 'vue'
import swal from 'sweetalert2'

var notify = {
    success(title = 'Thành Công', text = '', next, confirmButtonText = 'Đồng ý') {
        swal({
            type: 'success',
            title: title.toString(),
            text: text.toString(),
            confirmButtonText: confirmButtonText
        }).then(() => {
            if (next) {
                next()
            }
        })
    },
    error(title = 'Đã Xảy Ra Lỗi', text = '', next) {
        swal({
            type: 'error',
            title: title.toString(),
            html: text.toString()
        }).then(() => {
            if (next) {
                next()
            }
        })
    },
    confirm(title = 'Xác Nhận', text, next) {
        swal({
            title: title.toString(),
            text: text.toString(),
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Hủy bỏ'
        }).then((result) => {
            if (result.value && next) {
                next()
            }
        })
    }
}

Vue.use({
    install(Vue, options) {
        Vue.prototype['$notify'] = notify
        Vue.prototype['$swal'] = swal
    }
})

export default notify