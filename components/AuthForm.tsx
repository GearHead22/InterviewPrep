"use client"
import {z} from "zod";
import { authFormSchema } from '@/lib/validation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { Form} from './ui/form';

import { Button } from "./ui/button";
import Image from "next/image";
import Field from "./forms/FormField";
import Link from "next/link";
import {toast} from 'sonner';
import { useRouter } from "next/navigation";
const AuthForm = ({type}:{type:FormType}) => {

  const router = useRouter();
  const formSchema = authFormSchema(type);
  
  const form = useForm< z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      name:"",
      email:"",
      password:"",
    }
})
  const onSubmitHandler = (values: z.infer<typeof formSchema>) =>{
    try{
      if(type==='signup'){
        toast.success('Account created successfully. Please sign in.');
        router.push('/signin');
      }
      else{
        toast.success('Sign in successfully.')
        router.push('/')
      }

    }catch(error){
      console.log(error)
      toast.error(`There was an error ${error}`)
    }
  }
  const isSignIn = type==='signin';
  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex gap-2 justify-center">
          <Image alt="logo" src="/logo.svg" height={32} width={38}/>
          <h2 className="text-primary-100">Prepwise</h2>
        </div>
        <h3>
          Practice job interview with AI
        </h3>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmitHandler)} className="w-full space-y-6 mt-4 form">
          {!isSignIn && <Field 
            control={form.control} 
            name="name" 
            placeholder="Your Name" 
            label="Name"
          />}
          <Field 
            control={form.control} 
            name="email" 
            placeholder="Enter your email" 
            label="Email"
          />
          <Field type='password' control={form.control} name="password" placeholder="password" label="Password"/>
          <Button className="btn" type="submit">{
            isSignIn?'Sign in': 'Create an Account'
            }</Button>
        </form>
        
      </Form>
      <p className="text-center my-4">
        {
          isSignIn?(
          <>
          <span>No account yet? </span><Link className="text-sm" href="signup">Register</Link>
          </>):
          (
            <>
            <span>Already have an account?</span><Link href="signin">Login</Link>
            </>)
        }
      </p>
    </div>
  )
}

export default AuthForm