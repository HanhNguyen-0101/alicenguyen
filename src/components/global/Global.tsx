import _ from "lodash"
import { NavLink } from "react-router-dom"
import { CONTACT } from "../../utils/constant/constant"
import { LinkedinFilled, GithubFilled, SkypeFilled, FacebookFilled, MailFilled } from '@ant-design/icons';
import { IContactModel } from "../../redux/types/contact.type";
import { Input, Table } from "antd";
import { ISubCategoryModel } from "../../redux/types/subCategory.type";
const { Search } = Input;

export const WritingLink = () => {
    return <NavLink className="hover:text-inherit focus:text-inherit" to="/writing">writing.</NavLink>
}
export const SayHiLink = () => {
    return <NavLink className="hover:text-inherit focus:text-inherit" to="/sayhi">say hi.</NavLink>
}
export const WebDevelopmentLink = () => {
    return <NavLink className="hover:text-inherit focus:text-inherit" to="/development">software development.</NavLink>
}
export const Logo = () => {
    return <NavLink to="/"><img alt="logo" src="images/logo/logo-white.png" style={{ maxWidth: 145 }} className="inline-block" /></NavLink>
}
export const mapContactWithIcon = (contactArr: any) => {
    return _.map(contactArr, function (o: IContactModel) {
        switch (o.name.toLowerCase()) {
            case CONTACT.EMAIL: {
                return { ...o, icon: <MailFilled /> }
            }
            case CONTACT.FACEBOOK: {
                return { ...o, icon: <FacebookFilled /> }
            }
            case CONTACT.GITHUB: {
                return { ...o, icon: <GithubFilled /> }
            }
            case CONTACT.LINKEDIN: {
                return { ...o, icon: <LinkedinFilled /> }
            }
            case CONTACT.SKYPE: {
                return { ...o, icon: <SkypeFilled /> }
            }
            default: return o;
        }
    })
}
export const AdminPage = (props: any) => {
    const { columns, dataSource, title, onAdd, onSearch } = props;
    return (
        <>
            {/* Dashboard actions */}
            <div className="sm:flex sm:items-center mb-8 md:inline-block md:w-full">
                {/* Right: Actions */}

                <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2 md:float-left">
                    {/* Add view button */}
                    <button className="btn bg-amber-700 hover:bg-amber-500 text-yellow-100" onClick={() => onAdd()}>
                        <svg className="w-3 h-3 fill-current shrink-0 text-yellow-100" viewBox="0 0 16 16">
                            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                        </svg>
                        <span className="hidden xs:block ml-2">Add view</span>
                    </button>
                </div>
                <div className="relative md:w-1/2 md:max-w-lg md:inline-block md:float-right">
                    <Search placeholder="Search..." className="search-admin" onSearch={onSearch} />
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-full bg-white shadow-lg rounded-sm border border-slate-200">
                    <header className="px-5 py-4 border-b border-slate-100">
                        <h2 className="font-semibold text-slate-800 uppercase text-lg opacity-80">{title}</h2>
                    </header>
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <Table columns={columns} rowKey="id" className="text-slate-800" bordered dataSource={dataSource} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export const filterFuction = (subCategoryArr: Array<ISubCategoryModel>, name: string) => {
    const filter = _.filter(subCategoryArr, (i: ISubCategoryModel) => i.category.name.toLowerCase() === name);
    const filterData = _.map(filter, function (i: ISubCategoryModel) {
        return {
            text: i.name,
            value: i.id
        }
    })
    return filterData;
}
export const callback = (msg: string) => {
    console.log(msg);
}
export const callbackObj = (values: any, callback: any) => ({
    values,
    callback: (data: any) => callback
});