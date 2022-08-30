Feature: End to end Ecommerce validation

    Application regression(my feature description)

    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add items to Cart
    And Validate total prices
    Then Select country, submit and verify Thankyou