export class ViewsMap {


    constructor() {
        this.map = {};
        this.defaultViewname = 'default';
    }

    createRegistration(component, itemType, viewName) {
        return {
            component: component,
            itemType: itemType,
            viewName: viewName
        };
    }

    importRegistrations(registrations) {
        if(!Array.isArray(registrations)) {
            registrations = [registrations];
        }

        registrations.forEach(function(element) {
            this.add(element.component, element.itemType, element.viewName);
        }, this);
    }

    add(component, itemType, viewName) {
        if (!viewName) { viewName = this.defaultViewname; }

        var key = itemType.toLowerCase();
        if (!this.map[itemType]) { this.map[key] = {}; }
        this.map[itemType][viewName] = component;
    }

    get(itemType, viewName) {
        if (!viewName) { viewName = this.defaultViewname; }
        if (!this.map[itemType]) {
            return null;
        }

        return this.map[itemType][viewName] || null;
    }
}

var instance = new ViewsMap();

export default instance;