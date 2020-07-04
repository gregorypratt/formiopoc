import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
})
export class AppRoot {
  render() {
    return (
      <main class="container">
        <header>
          <h1>Rental Agreement</h1>
          <small class="text-muted">Proof of Concept</small>
          <nav class="nav pt-2">
            <stencil-route-link url="/create-rental">
              Start Rental
            </stencil-route-link>
            <span class="px-2">&bull;</span>
            <stencil-route-link url="/handover">
              Start Handover
            </stencil-route-link>
            <span class="px-2">&bull;</span>
            <stencil-route-link url="/handover-list">
              Complete Handover
            </stencil-route-link>
          </nav>
        </header>
        <hr />
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/create-rental" component="create-rental" />
            <stencil-route url="/handover" component="customer-handover" />
            <stencil-route url="/handover-list" component="handover-list" />
            <stencil-route url="/rental-agreement/:handoverId" component="rental-agreement" />
          </stencil-route-switch>
        </stencil-router>
      </main>
    );
  }
}
