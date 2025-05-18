'use client'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Button,
} from '@/design/components'
import * as Icons from '@/design/icons'

const SampleCodeDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Icons.Code className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Accordion Sample Code</DialogTitle>
          <pre className="bg-slate-100 p-4 rounded-lg">
            {`
<Accordion type='single' collapsible>
  <AccordionItem value='single-item-1'>
    <AccordionTrigger>Accordion Item 1</AccordionTrigger>
    <AccordionContent>
      <div className='rounded-2xl bg-slate-100 p-6 m-2'>
        <div className='flex items-center'>
          <p>Accordion Content 1</p>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value='single-item-2'>
    <AccordionTrigger>Accordion Item 2</AccordionTrigger>
    <AccordionContent>
      <div className='rounded-2xl bg-slate-100 p-6 m-2'>
        <div className='flex items-center'>
          <p>Accordion Content 2</p>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value='single-item-3'>
    <AccordionTrigger>Accordion Item 3</AccordionTrigger>
    <AccordionContent>
      <div className='rounded-2xl bg-slate-100 p-6 m-2'>
        <div className='flex items-center'>
          <p>Accordion Content 3</p>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
                `}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const BasicAccordionCard = () => {
  return (
    <Card className="rounded-2xl shadow-2xl">
      <CardHeader className="border-b border-slate-200" title="Accordion">
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Basic Accordions </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-flow-col grid-cols-2 gap-6 my-6">
          <Card className="col-span-1 rounded-2xl border border-slate-200">
            <CardHeader className="border-b border-slate-200" title="Accordion">
              <CardTitle>Single type</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="single-item-1">
                  <AccordionTrigger>Accordion Item 1</AccordionTrigger>
                  <AccordionContent>
                    <div className="rounded-2xl bg-slate-100 p-6 m-2">
                      <div className="flex items-center">
                        <p>Accordion Content 1</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="single-item-2">
                  <AccordionTrigger>Accordion Item 2</AccordionTrigger>
                  <AccordionContent>
                    <div className="rounded-2xl bg-slate-100 p-6 m-2">
                      <div className="flex items-center">
                        <p>Accordion Content 2</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="single-item-3">
                  <AccordionTrigger>Accordion Item 3</AccordionTrigger>
                  <AccordionContent>
                    <div className="rounded-2xl bg-slate-100 p-6 m-2">
                      <div className="flex items-center">
                        <p>Accordion Content 3</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          <Card className="col-span-1 rounded-2xl border border-slate-200">
            <CardHeader className="border-b border-slate-200" title="Accordion">
              <CardTitle>Multiple type</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <Accordion type="multiple">
                <AccordionItem value="multiple-item-1">
                  <AccordionTrigger>Accordion Item 1</AccordionTrigger>
                  <AccordionContent>
                    <div className="rounded-2xl bg-slate-100 p-6 m-2">
                      <div className="flex items-center">
                        <p>Accordion Content 1</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="multiple-item-2">
                  <AccordionTrigger>Accordion Item 2</AccordionTrigger>
                  <AccordionContent>
                    <div className="rounded-2xl bg-slate-100 p-6 m-2">
                      <div className="flex items-center">
                        <p>Accordion Content 2</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="multiple-item-3">
                  <AccordionTrigger>Accordion Item 3</AccordionTrigger>
                  <AccordionContent>
                    <div className="rounded-2xl bg-slate-100 p-6 m-2">
                      <div className="flex items-center">
                        <p>Accordion Content 3</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}
