import React, { Component } from 'react';
import moment from 'moment';
import { Button, Checkbox, Icon, Grid, Popup, Table, Transition } from 'semantic-ui-react';

export default class Todo extends Component {
 constructor() {
    super();
    this.handlerEdit = this.handlerEdit.bind(this);
    this.handlerRemove = this.handlerRemove.bind(this);
  }

  handlerEdit(e){
    this.props.onEditTodo(e);
  }

  handlerRemove(e){
    this.props.onRemoveTodo(e);
  }

  render() {
    const { id, user, product, price,quantity,total,createdAt, completedAt } = this.props;

    const renderDate = (date) => {
      const timestamp = date;
      if (timestamp) {
        return `${moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')}`;
      }
      return '';
    }

    return (
      <Table.Row key={id}>
        <Table.Cell>{user}</Table.Cell>
        <Table.Cell>{product}</Table.Cell>
        <Table.Cell>{price}</Table.Cell>
        <Table.Cell>{quantity}</Table.Cell>
        <Table.Cell>{product === 'Pepsi Cola' && quantity > 2  && (total * 0.2)} {product === 'Pepsi Cola' && quantity < 3  && (total)} {product !== 'Pepsi Cola' && (total)} EUR</Table.Cell>
        <Table.Cell>{renderDate(createdAt)}</Table.Cell>
        <Table.Cell>
          <Button 
            basic color="blue" icon="edit"
            onClick={() => {
              this.handlerEdit(id);
            }}/>

          <Button 
            basic color="red" icon="trash"
            onClick={() => {
              this.handlerRemove(id);
            }}/>
        </Table.Cell>
      </Table.Row>
    );
  }
}