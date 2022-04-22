$(function() {
    $('#yes').click(function(event) {
        modal('怎么可以，真跟我结婚！！(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('老婆大人！', A);
    });
});

function A() {
    modal('让小的服侍你！', B);
}

function B() {
    modal('就这一辈子，你是我的人了', C);
}

function C() {
    modal('不可以拒绝的', D);
}

function D() {
    modal('拒绝是不存在的', E);
}

function E() {
    modal('这辈子都不可能让你离开我', F);
}

function F() {
    modal('去民政局吧', G);
}

function G() {
    modal('房产证上写我名', H);
}

function H() {
    modal('饭老婆做', I);
}

function I() {
    modal('爱你。么么哒！', J)
}

function J() {
    modal('好不好嘛', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
