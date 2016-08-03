// @flow
import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'

export default (ComposedComponent: ReactClass<*>) => class extends Component {

  subs: Object

  constructor() {
    super();
    this.subs = {};
  }

  subscribe(name :string, ...args: any) {
    if (this.subs[name])
      this.subs[name].stop();

    this.subs[name] = Meteor.subscribe(name, ...args);
  }

  subscriptionReady(name: string) {
    if (this.subs[name].ready())
      return this.subs[name].ready();
  }

  componentWillUnmount() {
    Object.keys(this.subs).map(key => this.subs[key].stop());
  }

  render() {
    return (
      <ComposedComponent
        {...this.props}
        subscribe={this.subscribe.bind(this)}
        subscriptionReady={this.subscriptionReady.bind(this)}
      />
    );
  }
};
