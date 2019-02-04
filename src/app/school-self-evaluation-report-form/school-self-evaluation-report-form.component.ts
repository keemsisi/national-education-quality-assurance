import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'app-school-self-evaluation-report-form',
  templateUrl: './school-self-evaluation-report-form.component.html',
  styleUrls: ['./school-self-evaluation-report-form.component.css']
})
export class SchoolSelfEvaluationReportFormComponent implements OnInit , AfterViewInit {

  belongsTo: Array<string> = [
    'Religious Body',
    'Individual',
    'CBOs',
    'NGOs',
    'Corporate Organization',
    'Other Nationality School',
  ];

  location: Array<string> = ['Rural', 'Urban', 'Others'];
  schoolProfile: FormGroup;
  surveyFormSection: FormGroup;
  finalSection: FormGroup;
  listOfState: Array<Object> ;

  // dummy questions for testing
  dummyQuestions: Array<QuestionFormat> = [];

  // questions from the server
  uploadedQuestions: Array<QuestionFormat>;


  /**
   * Array of answers from the survey question
   */
  surveyAnswers: { [question: string]: string };

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  private signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 700,
    'canvasHeight': 500
  };

  constructor(private fb: FormBuilder) {

    this.loadDummyQuestions();

      /**
     * The school Profile section
     */
    this.schoolProfile = this.fb.group({
      state: new FormControl('', Validators.required),
      lga: new FormControl('', Validators.required),
      schoolType: new FormControl('', Validators.required),
      numberOfBoys: new FormControl('', [Validators.required, Validators.pattern(new RegExp('\\d+'))]),
      numberOfGirls: new FormControl('', [Validators.required, Validators.pattern(new RegExp('\\d+'))]),
      totalNumberOFLearners: new FormControl('', [Validators.required, Validators.pattern(new RegExp('\\d+'))]),
      schoolOrCenterCode: new FormControl('', [Validators.required, Validators.pattern(new RegExp('[a-zA-Z]*'))]),
      nameOfSchoolOrCenter: new FormControl('', [Validators.required, Validators.pattern(new RegExp('[a-zA-Z]*'))]),
      yearOfEstablishment: new FormControl('', [Validators.required, Validators.pattern(new RegExp('[a-zA-Z]*'))]),
      location: new FormControl('', [Validators.required, Validators.pattern(new RegExp('[a-zA-Z]*'))]),
      streetAddress: new FormControl('', [Validators.required, Validators.pattern(new RegExp('[a-zA-Z]*'))]),
      poBox: new FormControl('', [Validators.required, Validators.pattern(new RegExp('[a-zA-Z]*'))]),
      town_Village: new FormControl('', [Validators.required, Validators.pattern(new RegExp('[a-zA-Z]*'))]),
      telephone: new FormControl('', [Validators.required, Validators.pattern(new RegExp('\\+(?<=234)\\d{10}|\\d{11}'))]),
      email: new FormControl('', [Validators.required, Validators.email]),
      ownerShip: new FormControl('', [Validators.required, Validators.pattern(new RegExp('\\w+'))]),
      belongsTo: new FormControl('', [Validators.required, Validators.pattern(new RegExp('\\w+'))]),
      other: new FormControl('', [Validators.pattern(new RegExp('\\w+'))]),
      schoolOrCenterLevel: new FormControl('', [Validators.required, Validators.pattern(new RegExp('\\w+'))]),
      typeOfSchool: new FormControl('', [Validators.required, Validators.pattern(new RegExp('\\w+'))]),
      operationalModeA: new FormControl('', [Validators.required, Validators.pattern(new RegExp('\\w+'))]),
      operationalModeB: new FormControl('', [Validators.required, Validators.pattern(new RegExp('\\w+'))]),
      pricipalName: new FormControl('', [Validators.required, Validators.pattern(new RegExp('\\w+'))]),
      numAsstHTPVPs: new FormControl('', [Validators.required, Validators.pattern(new RegExp('\\d+'))]),
      numberOfHODs: new FormControl('', [Validators.required, Validators.pattern(new RegExp('\\d+'))]),
      livingInComMale: new FormControl('', [Validators.required, Validators.pattern(new RegExp('\\d+'))]),
      livingInCompFemale: new FormControl('', [Validators.required, Validators.pattern(new RegExp('\\d+'))]),
      guideConselMale: new FormControl('', [Validators.required, Validators.pattern(new RegExp('\\d+'))]),
      guideConselFemales: new FormControl('', [Validators.required, Validators.pattern(new RegExp('\\d+'))]),
      sourceOfFunds: new FormControl('', [Validators.required, Validators.pattern(new RegExp('\\w+'))]),
    });


    /**
     * The survey form questions sections
     */
    this.surveyFormSection = this.fb.group({
      answerController: new FormControl('', [ Validators.required])
    });

    /**
     * The final section of the form
     */
    this.finalSection = this.fb.group({
      dateF: new FormControl('', Validators.required),
      nameOfPF:  new FormControl('', Validators.required),
      dateF_1: new FormControl('', Validators.required),
      dateF_2: new FormControl('', Validators.required)
    });

   }

  ngOnInit() {
  }


  /**
   * Method implementation of the AfterViewInit for the signature pad
   */
  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }


  /**
   * The method called by the signature pad on draw complete
   */
  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL() == '');
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }


  /**
   * 
   * @param question This is the question gotten from the server to ask the school
   * @param answer The answer the evaluator picked from the optionses or entered
   */
  addAnswer(question: string , answer: string): void {
    this.surveyAnswers[question] = answer;
  }

  loadDummyQuestions(): void {

    this.dummyQuestions.push({
      question: 'What is cedarview into?',
      doesOptionsesExist: true,
      optionses: [
        'The name of my school is Oshogbo',
        'The name of my school is Lasvegas',
        'Must you know the name of my school?',
        'I dont know what you are saying'
      ]
    });


    this.dummyQuestions.push({
      question: 'Tell Us about cedarview...',
      doesOptionsesExist: true,
      optionses: [
        'The name of my school is Oshogbo',
        'The name of my school is Lasvegas',
        'Must you know the name of my school?',
        'I dont know what you are saying'
      ]
    });
    this.dummyQuestions.push({
      question: 'What is the name of your school',
      doesOptionsesExist: true,
      optionses: [
        'The name of my school is Oshogbo',
        'The name of my school is Lasvegas',
        'Must you know the name of my school?',
        'I dont know what you are saying'
      ]
    });


    this.dummyQuestions.push({
      question: 'Whos is the network lead for cedarview?',
      doesOptionsesExist: true,
      optionses: [
        'The name of my school is Oshogbo',
        'The name of my school is Lasvegas',
        'Must you know the name of my school?',
        'I dont know what you are saying'
      ]
    });

    this.dummyQuestions.push({
      question: 'What is the name of your school',
      doesOptionsesExist: true,
      optionses: [
        'The name of my school is Oshogbo',
        'The name of my school is Lasvegas',
        'Must you know the name of my school?',
        'I dont know what you are saying'
      ]
    });


    this.dummyQuestions.push({
      question: 'Why do you choose to do your nit at Cedarview?',
      doesOptionsesExist: true,
      optionses: [
        'The name of my school is Oshogbo',
        'The name of my school is Lasvegas',
        'Must you know the name of my school?',
        'I dont know what you are saying'
      ]
    });

    this.dummyQuestions.push({
      question: 'What year was your school founded',
      doesOptionsesExist: true,
      optionses: [
        'The name of my school is Oshogbo',
        'The name of my school is Lasvegas',
        'Must you know the name of my school?',
        'I dont know what you are saying'
      ]
    });

    this.dummyQuestions.push({
      question: 'How odl are your now',
      doesOptionsesExist: true,
      optionses: [
        'The name of my school is Oshogbo',
        'The name of my school is Lasvegas',
        'Must you know the name of my school?',
        'I dont know what you are saying'
      ]
    });

    this.dummyQuestions.push({
      question: 'What is the name of your school',
      doesOptionsesExist: true,
      optionses: [
        'The name of my school is Oshogbo',
        'The name of my school is Lasvegas',
        'Must you know the name of my school?',
        'I dont know what you are saying'
      ]
    });

    this.dummyQuestions.push({
      question: 'I love java programming',
      doesOptionsesExist: true,
      optionses: [
        'The name of my school is Oshogbo',
        'The name of my school is Lasvegas',
        'Must you know the name of my school?',
        'I dont know what you are saying'
      ]
    });

    this.dummyQuestions.push({
      question: 'What is your favourite programming language ',
      doesOptionsesExist: true,
      optionses: [
        'The name of my school is Oshogbo',
        'The name of my school is Lasvegas',
        'Must you know the name of my school?',
        'I dont know what you are saying'
      ]
    });

    this.dummyQuestions.push({
      question: 'Who do your love so much',
      doesOptionsesExist: true,
      optionses: [
        'The name of my school is Oshogbo',
        'The name of my school is Oshogbo',
        'The name of my school is Lasvegas',
        'Must you know the name of my school?',
        'I dont know what you are saying'
      ]
    });


  }

}

/**
 * The question format the application is receiving from the server
 */
export interface QuestionFormat {
  question: string; // this is the question to ask the school
  doesOptionsesExist: boolean; // checks whether any option exists else it will be a textfiled to enter the answer
  optionses?: Array<string>; // the options to display is the second property is true
}
