# Overview

This example shows how to

- create the following AWS network resources:
  - a VPC
  - a public subnet in the VPC
  - a private subnet in the VPC
  - a security group
  - an internet gateway for the VPC
  - a route table for the public subnet, routed to the internet gateway
  - a NAT gateway in the public subnet
  - an Elastic IP for the NAT gateway
  - a route table for the private subnet, routed to the NAT gateway
- create a lambda in the private subnet
- create a NAT gateway in the public subnet and configure routing from the private subnet through the NAT so that requests originating from the lambda can have a static IP address (Elastic IP)
