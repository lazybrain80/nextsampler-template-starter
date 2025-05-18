'use client'

import { ReactNode } from 'react'
import { cn } from '@/libs/utils'
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

interface CustomAccordionProps {
  className?: string
  children: ReactNode
  type: 'single' | 'multiple'
  collapsible?: boolean
}

interface CustomAccordionItemProps {
  className?: string
  children: ReactNode
  disabled?: boolean
  value: string
}

interface CustomAccordionTriggerProps {
  className?: string
  children: ReactNode
}

interface CustomAccordionContentProps {
  className?: string
  children: ReactNode
}

const CustomAccordion = ({ className, children, ...props }: CustomAccordionProps) => {
  return (
    <Accordion
      className={cn('rounded-2xl border border-slate-500 p-4 mt-6', className)}
      {...props}
      type={props.type}
    >
      {children}
    </Accordion>
  )
}

const CustomAccordionItem = ({
  className,
  children,
  disabled,
  value,
  ...props
}: CustomAccordionItemProps) => {
  return (
    <AccordionItem
      className={cn('rounded-2xl data-[state=open]:shadow-md', className)}
      disabled={disabled}
      value={value}
      {...props}
    >
      {children}
    </AccordionItem>
  )
}

const CustomAccordionTrigger = ({ className, children, ...props }: CustomAccordionTriggerProps) => {
  return (
    <AccordionTrigger
      className={cn('rounded-sm text-xl font-bold p-2', 'hover:bg-slate-200', className)}
      {...props}
    >
      {children}
    </AccordionTrigger>
  )
}

const CustomAccordionContent = ({ className, children, ...props }: CustomAccordionContentProps) => {
  return (
    <AccordionContent className={cn(className)} {...props}>
      {children}
    </AccordionContent>
  )
}

const SampleCodeDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Icons.Code className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl h-[90%] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle>Accordion Sample Code</DialogTitle>
          <pre className="bg-slate-100 p-4 rounded-lg">
            {`
interface CustomAccordionProps {
  className?: string
  children: ReactNode
  type: 'single' | 'multiple'
  collapsible?: boolean
}

interface CustomAccordionItemProps {
  className?: string
  children: ReactNode
  disabled?: boolean
  value: string
}

interface CustomAccordionTriggerProps {
  className?: string
  children: ReactNode
}

interface CustomAccordionContentProps {
  className?: string
  children: ReactNode
}

const CustomAccordion = ({
  className,
  children,
  ...props
}: CustomAccordionProps) => {
  return (
    <Accordion 
      className={cn(
        'rounded-2xl border border-slate-500 p-4 mt-6',
        className
      )} 
      {...props} 
      type={props.type}
    >
      {children}
    </Accordion>
  )
}

const CustomAccordionItem = ({
  className, 
  children, 
  disabled, 
  value, 
  ...props
}: CustomAccordionItemProps) => {
  return (
    <AccordionItem 
      className={cn(
        'rounded-2xl data-[state=open]:shadow-md',
        className
      )}
      disabled={disabled}
      value={value}
      {...props}
    >
      {children}
    </AccordionItem>
  )
}

const CustomAccordionTrigger = ({
  className, 
  children, 
  ...props 
}: CustomAccordionTriggerProps) => {
  return (
    <AccordionTrigger
      className={cn(
        'rounded-xl text-xl font-bold',
        'hover:bg-slate-200',
        className
      )} 
      {...props}
    >
      {children}
    </AccordionTrigger>
  )
}

const CustomAccordionContent = ({ 
  className, 
  children, 
  ...props 
}: CustomAccordionContentProps) => {
  return (
    <AccordionContent
      className={cn(className)}
      {...props}
    >
      {children}
    </AccordionContent>
  )
}
                `}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const CustomAccordionCard = () => {
  return (
    <Card className="rounded-2xl  shadow-2xl">
      <CardHeader className="border-b border-slate-200" title="Accordion">
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Custom Accordions </div>
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
            <CardContent>
              <CustomAccordion className="rounded-2xl mt-6" type="single" collapsible>
                <CustomAccordionItem value="item-1">
                  <CustomAccordionTrigger>Accordion Item 1</CustomAccordionTrigger>
                  <CustomAccordionContent>
                    <div className="rounded-2xl bg-slate-100 p-6 m-2">
                      <div className="flex items-center">
                        <p>Accordion Content 1</p>
                      </div>
                    </div>
                  </CustomAccordionContent>
                </CustomAccordionItem>
                <CustomAccordionItem value="item-2">
                  <CustomAccordionTrigger>Accordion Item 2</CustomAccordionTrigger>
                  <CustomAccordionContent>
                    <div className="rounded-2xl bg-slate-100 p-6 m-2">
                      <div className="flex items-center">
                        <p>Accordion Content 2</p>
                      </div>
                    </div>
                  </CustomAccordionContent>
                </CustomAccordionItem>
                <CustomAccordionItem value="item-3">
                  <CustomAccordionTrigger>Accordion Item 3</CustomAccordionTrigger>
                  <CustomAccordionContent>
                    <div className="rounded-2xl bg-slate-100 p-6 m-2">
                      <div className="flex items-center">
                        <p>Accordion Content 3</p>
                      </div>
                    </div>
                  </CustomAccordionContent>
                </CustomAccordionItem>
              </CustomAccordion>
            </CardContent>
          </Card>
          <Card className="col-span-1 rounded-2xl border border-slate-200">
            <CardHeader className="border-b border-slate-200" title="Accordion">
              <CardTitle>Multiple type</CardTitle>
            </CardHeader>
            <CardContent>
              <CustomAccordion type="multiple">
                <CustomAccordionItem value="item-1">
                  <CustomAccordionTrigger>
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold">Accordion Item 1</h2>
                    </div>
                  </CustomAccordionTrigger>
                  <CustomAccordionContent>
                    <div className="rounded-2xl bg-slate-100 p-6 m-2">
                      <div className="flex items-center">
                        <p>Accordion Content 1</p>
                      </div>
                    </div>
                  </CustomAccordionContent>
                </CustomAccordionItem>
                <CustomAccordionItem value="item-2">
                  <CustomAccordionTrigger>
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold">Accordion Item 2</h2>
                    </div>
                  </CustomAccordionTrigger>
                  <CustomAccordionContent>
                    <div className="rounded-2xl bg-slate-100 p-6 m-2">
                      <div className="flex items-center">
                        <p>Accordion Content 2</p>
                      </div>
                    </div>
                  </CustomAccordionContent>
                </CustomAccordionItem>
                <CustomAccordionItem value="item-3">
                  <CustomAccordionTrigger>
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold">Accordion Item 3</h2>
                    </div>
                  </CustomAccordionTrigger>
                  <CustomAccordionContent>
                    <div className="rounded-2xl bg-slate-100 p-6 m-2">
                      <div className="flex items-center">
                        <p>Accordion Content 3</p>
                      </div>
                    </div>
                  </CustomAccordionContent>
                </CustomAccordionItem>
              </CustomAccordion>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}
