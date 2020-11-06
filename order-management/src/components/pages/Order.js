import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../actions/orderAction';
import { render } from 'react-dom';
import { Button, Checkbox, Icon, Grid, Popup,Select, Table, Transition,Input ,Form,label} from 'semantic-ui-react';
import moment from 'moment';
import Todo from './Todo';
import Modal from 'react-modal';
import './style.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width :'50%'
  }
};

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const useroptions = [
  { key: '1', text: 'John Smith', value: '1' },
  { key: '2', text: 'Laura Stone', value: '2' },
  { key: '3', text: 'Jon Olsson', value: '3' },
]

const searchoptions = [
  { key: '1', text: 'All time', value: '1' },
  { key: '2', text: 'Last 7 days', value: '2' },
  { key: '3', text: 'Today', value: '3' },
]

const productoptions = [
  { key: '1', text: 'Coca Cola', value: '1' },
  { key: '2', text: 'Pepsi Cola', value: '2' },
  { key: '3', text: 'Burger', value: '3' },
]

const tasks = [
  {
    id: 1,
    user: 'Suraj',
    product:'Coca Cola',
    price:200,
    quantity:2,
    total:400,
    createdAt: moment().unix(),
  }, {
    id: 2,
    user: 'John',
    product:'Pepsi Cola',
    price:200,
    quantity:5,
    total:1000,
    createdAt: moment().unix(),
  }, {
    id: 3,
    user: 'Geran',
    product:'Burger',
    price:200,
    quantity:5,
    total:1000,
    createdAt: moment().unix(),
  }, {
    id: 4,
    user: 'MAn',
    product:'Makitha',
    price:200,
    quantity:5,
    total:1000,
    createdAt: moment().unix(),
  }
];

class Order extends Component {

  constructor() {
    super();
    this.onEditTodo = this.onEditTodo.bind(this);
    this.onRemoveTodo = this.onRemoveTodo.bind(this);
  } 

  componentWillMount() {
    this.props.fetchOrders();
  }

  state = { 
  	items: tasks.slice(0, 100),
  	modalIsOpen:false,
  	setIsOpen:false,
  	searchterms:"",
  	searchoptions:1,
  	searchoptionid:1
  }


  handleAdd = () => this.setState({ items: tasks.slice(0, this.state.items.length + 1) })

  handleRemove = () => this.setState({ items: this.state.items.slice(0, -1) })

  handlecloseModal = () => {
    this.setState({ modalIsOpen: false})
  }

  handleopenModal = () => {
    this.setState({ modalIsOpen: true})
  }

  onEditTodo = (e) => {
    alert(e);
  }

  onRemoveTodo = (e) => {
  	alert(e);
  }

  handleSubmit = (e) => {
  	alert("submi");
  }

  handleSelect = (e,data) => {
  	this.setState({ searchoptionid: data.value})
  }

  handleSearch = (e) => {
  	alert(this.state.searchterms);
  	alert(this.state.searchoptionid);
  }

  render() {
    const { items } = this.state;

    return (
      <div className="full-width">
      	<div className="search-block">
		  <Grid columns='equal'>
		    <Grid.Row>
	          <Grid.Column>
		        <Button.Group>
		          <Button onClick={this.handleopenModal} primary>+ New</Button>
		        </Button.Group>
	          </Grid.Column>

		      <Grid.Column style={{textAlign: "end"}}>
			    <Form.Group widths='100'>
					<Form.Field>
					  <Input icon='tags' iconPosition='left' type='text' placeholder='enter search terms...' action>
					    <input onChange={e => this.setState({ searchterms: e.target.value })}/>
					    <Select compact options={searchoptions} defaultValue='1' onChange={this.handleSelect} />
					    <Button onClick={this.handleSearch} color='teal'>Search</Button>
					  </Input>

					</Form.Field>
				</Form.Group>
	          </Grid.Column>
	        </Grid.Row>
	      </Grid>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.handlecloseModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

      <h3>Add New Order</h3>
      <div style={{height:"10px"}}></div>
      <Form>
        <Form.Group widths='equal'>
	          <Form.Field
	            control={Select}
	            label='User'
	            options={useroptions}
	            placeholder='Select User'
	          />
		</Form.Group>
        <Form.Group widths='equal'>
	          <Form.Field
	            control={Select}
	            label='Product'
	            options={productoptions}
	            placeholder='Select Product'
	          />
		</Form.Group>
        <Form.Group widths='equal'>
			<Form.Field>
			  <label>Quantity</label>
			  <Input type='text' />
			</Form.Field>
		</Form.Group>
	</Form>
		  <Button onClick={this.handleSubmit} primary>Submit</Button>
          <Button onClick={this.handlecloseModal} primary>Close</Button>
        </Modal>

        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>USER</Table.HeaderCell>
              <Table.HeaderCell>PRODUCT</Table.HeaderCell>
              <Table.HeaderCell>PRICE</Table.HeaderCell>
              <Table.HeaderCell>QUANTITY</Table.HeaderCell>
              <Table.HeaderCell>TOTAL</Table.HeaderCell>
              <Table.HeaderCell>DATE</Table.HeaderCell>
              <Table.HeaderCell>ACTION</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Transition.Group
            as={Table.Body}
            duration={1000}
          >
          {items.map(item => (
            <Todo onEditTodo={this.onEditTodo} onRemoveTodo={this.onRemoveTodo} {...item} />
          ))}
        </Transition.Group>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const customers = state.root.customers;
  return { customers };
};

export default connect(
  mapStateToProps,
  { fetchOrders }
)(Order);
