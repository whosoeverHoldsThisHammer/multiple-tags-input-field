import m from "mithril";

const root = document.getElementById("app")

const App = {
    view: function (vnode) {
        return m("div", { class: "container mx-auto"} , [
            m("input", { "class": "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", "type": "text", "name": "search", "id": "search", "placeholder": "Search..." })
        ])
    }
}

m.mount(root, App);