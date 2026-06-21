/**
 * Creates a Google Form QUIZ: "Buzzy's Fruit School" (Bebras Task 1).
 * - Single multiple-choice question
 * - Auto-grading (quiz mode), 1 point
 * - Immediate feedback after submission (correct/incorrect explanations)
 *
 * HOW TO RUN:
 * 1. Go to https://script.google.com  ->  New project
 * 2. Delete any sample code, paste this whole file
 * 3. Click Run (createBuzzyQuiz). Approve permissions when asked.
 * 4. Open the Execution log -> click the printed "Edit URL" to open your form.
 */
function createBuzzyQuiz() {
  var form = FormApp.create("Buzzy's Fruit School — Task 1");

  form.setDescription(
    "Buzzy is a little robot bee who works in a fruit garden. Buzzy has never seen fruit before, " +
    "so the gardener teaches Buzzy which fruits are SWEET and which fruits are SOUR.\n\n" +
    "The gardener picks up fruits one at a time and tells Buzzy what each one tastes like:\n" +
    "• Strawberry — Red, Small, Rough — SWEET\n" +
    "• Lemon — Yellow, Small, Smooth — SOUR\n" +
    "• Cherry — Red, Small, Smooth — SWEET\n" +
    "• Grapefruit — Yellow, Big, Smooth — SOUR\n\n" +
    "Buzzy looks at the table very carefully and notices something about the colours!\n" +
    "Now, a new fruit arrives: a RED APPLE. It is red, big, and smooth."
  );

  // Turn the form into a graded quiz. By default a quiz releases the grade
  // immediately after each submission, so the feedback below shows right away.
  form.setIsQuiz(true);

  var item = form.addMultipleChoiceItem();
  item.setTitle("What will Buzzy say about the red apple?");
  item.setPoints(1);
  item.setRequired(true);

  // Feedback shown for the correct choice.
  var correctFeedback = FormApp.createFeedback()
    .setText(
      "Correct! Both red fruits in the lessons (strawberry & cherry) were SWEET, " +
      "so Buzzy learns the pattern Red = Sweet and predicts SWEET for the red apple. " +
      "This is supervised learning: learning a rule from labelled examples."
    )
    .build();

  // Feedback shown for any wrong choice.
  var incorrectFeedback = FormApp.createFeedback()
    .setText(
      "Not quite. Look only at COLOUR in the gardener's lessons:\n" +
      "• Red fruits (strawberry, cherry) = SWEET\n" +
      "• Yellow fruits (lemon, grapefruit) = SOUR\n" +
      "Smoothness and size are NOT consistent rules, so Buzzy uses colour: a red apple = SWEET. " +
      "Answer A is correct."
    )
    .build();

  var choices = [
    item.createChoice('A) "SWEET!" — because all the red fruits were sweet', true),
    item.createChoice('B) "SOUR!" — because all the smooth fruits were sour', false),
    item.createChoice('C) "I don\'t know" — because Buzzy has never seen an apple before', false),
    item.createChoice('D) "SWEET!" — because the apple is big', false)
  ];
  item.setChoices(choices);
  item.setFeedbackForCorrect(correctFeedback);
  item.setFeedbackForIncorrect(incorrectFeedback);

  Logger.log("Edit URL:      " + form.getEditUrl());
  Logger.log("Live form URL: " + form.getPublishedUrl());
}
