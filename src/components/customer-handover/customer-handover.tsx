import { Component, h, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

declare const Formio: any;

@Component({
  tag: 'customer-handover',
})
export class CustomerHandover {
  formRef: any;

  @Prop() history: RouterHistory;

  async componentDidLoad() {
    Formio.icons = 'fontawesome';
    const formIO = await Formio.Formio.createForm(this.formRef, 'https://waugsllxhrnpqpd.form.io/handover');
    formIO.on('submitDone', () => {
      alert('Handover created');
      this.history.push('/handover-list');
    });
  }

  render() {
    return (
      <div>
        <h2>Customer Handover</h2>
        <div ref={(el) => (this.formRef = el)}></div>
      </div>
    );
  }
}
