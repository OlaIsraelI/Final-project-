-- Create the design_suggestions table
CREATE TABLE IF NOT EXISTS design_suggestions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    inspiration_source TEXT NOT NULL,
    color_palette TEXT[] NOT NULL,
    typography TEXT NOT NULL,
    layout_style TEXT NOT NULL,
    target_audience TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    deadline TIMESTAMP WITH TIME ZONE NOT NULL,
    status TEXT CHECK (status IN ('Not Started', 'In Progress', 'Completed')) DEFAULT 'Not Started'
);

-- Create an index on the deadline column for efficient querying
CREATE INDEX IF NOT EXISTS idx_design_suggestions_deadline ON design_suggestions(deadline);

-- Create an index on the status column
CREATE INDEX IF NOT EXISTS idx_design_suggestions_status ON design_suggestions(status);

-- Create an index on the created_at column for ordering
CREATE INDEX IF NOT EXISTS idx_design_suggestions_created_at ON design_suggestions(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE design_suggestions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations for now
-- In production, you'd want to restrict this based on user authentication
CREATE POLICY "Allow all operations on design_suggestions" ON design_suggestions
    FOR ALL USING (true);
