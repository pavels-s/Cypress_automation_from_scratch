Feature: End to end Ecommerce validation

    Application regression(my feature description)
    @Regression
    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add items to Cart
    And Validate total prices
    Then Select country, submit and verify Thankyou

    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details
    |name | gender |
    |Jane | Female |
    Then Validate the form behaviour
    And Select Shop page