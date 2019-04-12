function viewOne() {
    return m("div", {class: "title"}, "Hello Middle-Earth!");
}

function viewTwo() {
    var says = "Adam is better than Kim, right?";
    return m("div", {class: "text"}, says);
}

function viewThree() {
    return m("div", [
        m("img", {
            src: "css/component.png",
            class: "displayed"
        })
    ]);
}

var counter1 = 0;

function submit1() {
    counter1++;
}
function viewFour() {
    return m('div', [
        m('button', {class: "button", onclick: submit1}, counter1)
//        ,
//        m('button', {class: "button", onclick: submit1()}, counter1)
    ]);
}

const InputComponent = {
    view: function () {
        return m("div", {id: "input"}, [
            m("label", "input color:"),
            m("input", {
                id: "color-input",
                type: "text",
                onkeydown: submit,
                autofocus: "autofocus"
            })
        ]);
    }
};

const ColorButtonComponent = {
    view: function (vnode) {
        return m("div", {id: "color"},
            m("button", {
                id: "color-btn",
                style: `background-color: ${vnode.attrs.color.background}`,
                onclick: submit
            })
        );
    }
};

const ResetButtonComponent = {
    view: function (vnode) {
        return m("div", {id: "reset"},
            m("button", {
                id: "reset-btn",
                style: `border-color: ${vnode.attrs.color.border}`,
                onclick: submit
            },
                "reset"
        ));
    }
};

function viewFive() {
    return m("div",
      { id: "flex-container" },
      m(InputComponent),
      m(ColorButtonComponent, { color: State }),
      m(ResetButtonComponent, { color: State })
    );
}

function navigationComponent(currentView) {
    return {
        view() {
            return m('div', [
                m('div', {class: "container"}, [
                    m('a', {href: '#/'}, 'Home'),
                    m('a', {href: '#/route2'}, 'Components'),
                    m('a', {href: '#/route3'}, 'Components (Continued)'),
                    m('a', {href: '#/route4'}, 'State Changes'),
                    m('a', {href: '#/route5'}, 'Application Example')
                ]),
                m('main', [
                    currentView()
                ])
            ]);
        }
    };
}

m.route.prefix('#');
m.route(document.getElementById("output"), '/', {
    '/': navigationComponent(viewOne),
    '/route2': navigationComponent(viewTwo),
    '/route3': navigationComponent(viewThree),
    '/route4': navigationComponent(viewFour),
    '/route5': navigationComponent(viewFive),
});