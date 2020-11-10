import React from "react";
import { TabMenu } from "primereact/tabmenu";
import { PanelMenu } from "primereact/panelmenu";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          label: "Logo",
          template: () => <h1>Logo</h1>,
        },
        { label: "Home", icon: "pi pi-fw pi-home" },
        { label: "Calendar", icon: "pi pi-fw pi-calendar" },
        { label: "Edit", icon: "pi pi-fw pi-pencil" },
        { label: "Documentation", icon: "pi pi-fw pi-file" },
        { label: "Settings", icon: "pi pi-fw pi-cog" },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <Menu
          style={{ width: "100%" }}
          model={this.state.items}
          popup={true}
          ref={(el) => (this.menu = el)}
        />
        <Button
          label=""
          icon="pi pi-bars"
          style={{ width: "100%", borderRadius: "0" }}
          onClick={(event) => this.menu.toggle(event)}
        />
        {/* <TabMenu
          model={this.state.items}
          activeItem={this.state.activeItem}
          onTabChange={(e) => {
            if (e.value.label === "Logo") {
            } else {
              this.setState({ activeItem: e.value });
            }
          }}
        /> */}
      </React.Fragment>
    );
  }
}

export default Header;
