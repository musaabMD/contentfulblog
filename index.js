console.log('hi');

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhamdqY3lwZ3R2anFid2R1aG1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzMDIxNjgsImV4cCI6MjAxNDg3ODE2OH0.anO9iJJjOnUoo4q6lrGc-69bEX5pN9SmIhfX_NMYC1w";
;

const url = "https://vajgjcypgtvjqbwduhmi.supabase.co";

const supabase = supabase.createClient(url, key);

console.log('supabase');
