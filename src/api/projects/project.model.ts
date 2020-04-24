export interface Project {
    p_id?: number;
    p_title: string;
    p_desc: string;
    p_role: string;
    p_responsibilities: string;
    p_env: string;
    p_image: string;
    p_link: string;
    p_is_free_lance: number;
    p_period: string;
    p_client: string;
    p_location: string;
    p_created_date: string;
    p_created_by: number;
    p_status: number;
    c_id: number;
    p_modified_by?: number;
};
