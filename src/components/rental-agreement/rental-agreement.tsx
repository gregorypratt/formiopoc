import { Component, h, State, Prop } from '@stencil/core';
import { RouterHistory, MatchResults } from '@stencil/router';

declare const Formio: any;

@Component({
  tag: 'rental-agreement',
})
export class RentalAgreement {
  formRef: any;

  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;

  @State() submitDone: boolean = false;

  @State() handover: any = { data: {} };

  async componentDidLoad() {
    Formio.icons = 'fontawesome';
    const res = await fetch(`https://waugsllxhrnpqpd.form.io/handover/submission/${this.match.params.handoverId}`);
    this.handover = await res.json();

    const formIO = await Formio.Formio.createForm(this.formRef, 'https://waugsllxhrnpqpd.form.io/rentalagreement');
    formIO.submission = {
      data: {
        handover: this.handover,
      },
    };
    formIO.on('submitDone', () => {
      alert('Rental Agreement created');
      this.history.push('/create-rental');
    });
  }

  render() {
    return (
      <div>
        <h2>Customer Handover</h2>
        <div>
          Handover notes:
          <p class="font-weight-bold">{this.handover.data.handoverNotes}</p>
        </div>
        <div>
          Odometer:
          <p class="font-weight-bold">{this.handover.data.odometer} miles</p>
        </div>
        <div ref={(el) => (this.formRef = el)}></div>
      </div>
    );
  }
}
