Feature: Subscribers see different sets of stock images based on their subscription level

  @ignore @smoke
  Scenario: Free subscribers see only the free articles
    Given Free Frieda has a free subscription
    When Free Frieda logs in with her valid credentials
    Then she sees a Free article on the home page

  @smoke
  Scenario: Subscriber with a paid subscription can access both free and paid articles
    Given Paid Patty has a basic-level paid subscription
    When Paid Patty logs in with her valid credentials
    Then she sees a Free article and a Paid article on the home page