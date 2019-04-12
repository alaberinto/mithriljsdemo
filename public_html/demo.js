const InputComponent = {
  view: function() {
    return m("div", { id: "input" }, [
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
  view: function(vnode) {
    return m("div", { id: "color" }, 
        m("button", {
            id: "color-btn",
            style: `background-color: ${vnode.attrs.color.background}`,
            onclick: submit
          })
        );
  }    
};

const ResetButtonComponent = {
  view: function(vnode) {
    return m("div", { id: "reset" },
        m("button", {
          id: "reset-btn",
          style: `border-color: ${vnode.attrs.color.border}`,
          onclick: submit
          },
          "reset"
          )
        );
  }
};

const App = {
  view: function() {
    return m("div",
      { id: "flex-container" },
      m(InputComponent),
      m(ColorButtonComponent, { color: State }),
      m(ResetButtonComponent, { color: State })
    );
  }
};

m.mount(document.getElementById("output"), App);

m.render(document.getElementById("output"), "App");

//m.render(document.getElementById("output"), "Hello");