import { Component, h, State, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

declare const Formio: any;

@Component({
  tag: 'handover-list',
})
export class HandoverList {
  formRef: any;

  @Prop()
  history: RouterHistory;

  @State()
  handovers: Array<any> = [];

  navigateToCustomerAgreement(handoverId) {
    this.history.push(`/rental-agreement/${handoverId}`);
  }

  async componentDidLoad() {
    const res = await fetch('https://waugsllxhrnpqpd.form.io/handover/submission');
    this.handovers = await res.json();
  }

  render() {
    return (
      <div>
        <h2>List of Handover Documents</h2>
        <small class="lead text-muted">Select a handover document to accept agreement</small>
        <table class="table table-hover mt-5" style={{ cursor: 'pointer' }}>
          <thead class="thead-dark">
            <tr>
              <th scope="col">Vehicle Reg</th>
              <th scope="col">Conact Name</th>
              <th scope="col">Customer Number</th>
            </tr>
          </thead>
          <tbody>
            {this.handovers.map((handover) => (
              <tr onClick={() => this.navigateToCustomerAgreement(handover._id)}>
                <td>{handover.data.rentalInformation.data.vehicleRegistration}</td>
                <td>{handover.data.rentalInformation.data.contactName}</td>
                <td>{handover.data.rentalInformation.data.customerNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
