import * as React from "react";
import { connect } from "react-redux";
import { addTodo } from '../action/sample_action';

interface IProps {
    addTodo: any;
}

interface IState {
    input: ""
}

class SampleComponent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { input: "" };
      }
    
      updateInput = (input: any) => {
        this.setState({ input });
      };
    
      handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({ input: "" });
      };
    
      render() {
        return (
          <div>
            <input
              onChange={e => this.updateInput(e.target.value)}
              value={this.state.input}
            />
            <button className="add-todo" onClick={this.handleAddTodo}>
              Add Todo
            </button>
          </div>
        );
      }
}

export default connect(
    null,
    { addTodo }
  )(SampleComponent);