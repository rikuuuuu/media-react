import * as React from "react";
import SampleComponent from '../component/sample'
import { addTodo } from '../action/sample_action';
import { connect } from "react-redux";

interface IProps {
    addTodo: any
}

interface IState {
}

export class Sample extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        // this.state = {
        //     isInit: true,
        // };
    };
    
    public render(): JSX.Element {
        return (
            <SampleComponent />
        )
    }
}

export default connect(null, {addTodo})(Sample);