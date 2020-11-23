CREATE TABLE IF NOT EXISTS parts
(
    id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    part_name VARCHAR(200),
    part_type_id VARCHAR(200)
);

CREATE TABLE IF NOT EXISTS parts_types
(
    id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    type_name VARCHAR(200),
);
