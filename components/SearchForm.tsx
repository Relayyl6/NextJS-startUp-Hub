
import Form from 'next/form'
import { MdManageSearch } from "react-icons/md";
import SearchForReset from './SearchForReset';
import { Search } from 'lucide-react';

const   SearchForm = ({query}: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-5">
        <MdManageSearch className='size-10 m-0'/>
        <input
            name="query"
            defaultValue={query}
            className='flex-1 font-bold placeholder:font-semibold placeholder:text-black-100 w-full h-auto outline-none'
            placeholder='Search for startups, ideas, or entrepreneurs...'
        />

        <div className='flex gap-2'>
            {
                query && (
                    <SearchForReset/>
                )
            }

        {
            !query && (
            <button alt="something" type='submit' className="size-[50px] rounded-full bg-black text-white flex justify-center items-center !important">
                    <Search className='size-5'/>
                </button>
            )
        }
        </div>
    </Form>
  )
}

export default SearchForm