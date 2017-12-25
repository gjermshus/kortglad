import * as React from "react";
import * as ReactDom from "react-dom";
import Button from "react-bootstrap/lib/Button";
import FormControl from "react-bootstrap/lib/FormControl"

export class RefereeSearchBox extends React.Component<null, null> {
    render(): any {
        return (
            <form className="form-inline mb-2">
                <FormControl type="text" key="dommer" className="md-6" placeholder="https://www.fotball.no/fotballdata/person/dommeroppdrag/?fiksId=xxxx" />
                <Button bsStyle="primary" onClick={a => alert("TEST")} >Hent</Button>
                {/* <button type="button" className="btn btn-primary ml-1 has-spinner" id="fetch">Hent </button> */}
            </form>);
    }
}