import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'abc company', 'http://portfolio.christian.vanderveur.com','ruby on rails', 666, 199, 20, 'client@client.com')
  proposalTwo: Proposal = new Proposal(16, 'efg company', 'http://portfolio.christian.vanderveur.com','ruby on rails', 666, 199, 20, 'client@client.com')
  proposalThree: Proposal = new Proposal(17, 'xyz company', 'http://portfolio.christian.vanderveur.com','ruby on rails', 666, 199, 20, 'client@client.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
    ]
}