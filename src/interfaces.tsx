import React, {Component, ComponentElement, FunctionComponent, ReactElement} from "react";

export interface IdashboardSmallCard{
    Icon:ReactElement,
    title : string,
    text : string,
    color : string
}

export interface Iheader{
    sideBarCollapsed : boolean,
    setSideBarCollapsed : Function
}

export interface IsideBar{
    sideBarCollapsed : boolean,
    setSideBarCollapsed : Function
}

export interface Iroutes{
    path:string,
    exact : boolean,
    Component : any
}