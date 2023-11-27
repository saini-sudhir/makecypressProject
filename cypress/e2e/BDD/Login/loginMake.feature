Feature: login

Scenario Outline: Login Functionality
 Given Application Launch
 When user is click on login
 And Enter the email or mobile no "<Email>" details
 And click on Continue button
 #Then verify the label "<Label>"

 

 Examples:
  | Email | Label |
  | saini.sudhir25@gmail.com | Enter OTP |