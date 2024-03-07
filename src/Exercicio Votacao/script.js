"use strict";
class Votation {
    details;
    _votationOptions = [];
    constructor(details) {
        this.details = details;
    }
    addVotationOption(votationOption) {
        this._votationOptions.push(votationOption);
    }
    vote(votationIndex) {
        if (!this._votationOptions[votationIndex])
            return;
        this._votationOptions[votationIndex].numberOfVotes += 1;
    }
    get votationOptions() {
        return this._votationOptions;
    }
}
class VotationApp {
    votations = [];
    addVotation(votation) {
        this.votations.push(votation);
    }
    showVotations() {
        for (const votation of this.votations) {
            console.log(votation.details);
            for (const votationOption of votation.votationOptions) {
                console.log(`${votationOption.option}: ${votationOption.numberOfVotes}`);
            }
            console.log("#########");
            console.log("");
        }
    }
}
const votation1 = new Votation("Qual a sua linguagem de programação?");
votation1.addVotationOption({ numberOfVotes: 0, option: "JavaScript" });
votation1.addVotationOption({ numberOfVotes: 0, option: "TypeScript" });
votation1.addVotationOption({ numberOfVotes: 0, option: "C#" });
votation1.vote(0);
votation1.vote(1);
votation1.vote(2);
votation1.vote(1);
votation1.vote(1);
const votation2 = new Votation("Qual a sua cor favorita?");
votation2.addVotationOption({ numberOfVotes: 0, option: "Azul" });
votation2.addVotationOption({ numberOfVotes: 0, option: "Verde" });
votation2.addVotationOption({ numberOfVotes: 0, option: "Preto" });
votation2.vote(0);
votation2.vote(2);
votation2.vote(2);
votation2.vote(2);
votation2.vote(0);
const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);
votationApp.showVotations();
