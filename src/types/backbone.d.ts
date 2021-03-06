declare module Backbone {
  export class Model {
    attributes: any;
    constructor (attr? , opts? );
    get(name: string): any;
    set(name: string, val?: any): void;
    //set(obj: any): void;
    save(attr? , opts? ): void;
    destroy(): void;
    change(): void;
    bind(ev: string, f: Function, ctx?: any): void;
    on(ev_name: string, f: Function);
    off(ev_name?: string, f?: Function);
    trigger(ev_name: string, data?: any);

    toJSON(): any;
  }
  export class Collection {
    models: any[];
    constructor (models? , opts? );
    bind(ev: string, f: Function, ctx?: any): void;
    collection: Model;
    length: number;
    add(item:any);
    remove(item:any);
    on(ev_name: string, f: Function);
    off(ev_name: string, f?: Function);
    create(attrs, opts? ): Collection;
    each(f: (elem: any) => void ): void;
    fetch(opts?: any): void;
    last(): any;
    last(n: number): any[];
    filter(f: (elem: any) => any): Collection;
    without(...values: any[]): Collection;
  }
  export class View {
    constructor (options? );
    $(selector: string): any;
    el: any;
    $el: any;
    model: Model;
    remove(): void;
    delegateEvents: any;
    make(tagName: string, attrs? , opts? ): View;
    setElement(element: any, delegate?: bool): void;
    //setElement(element: string, delegate?: bool): void;
    tagName: string;
    events: any;
    static extend: any;
  }
}