"use client"
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function ProductViewTop() {
    return (
      <Card className="w-full flex flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Lyft launching cross-platform service this week
          </Typography>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            startups
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software company
            selling licenses. Yet its own business model disruption is only part
            of the story
          </Typography>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex text-xl font-thin bg-orange-900 text-white items-center gap-2">
              Add to Card
            </Button>
           
          </a>
          <a href="" className="inline-block ml-2">
          <Button variant="text" className="flex text-xl font-thin bg-blue-900 text-white items-center gap-2">
              Buy Now
            </Button>
          </a>
        </CardBody>
      </Card>
    );
  }