﻿CREATE TABLE [dbo].[UserRoles] (
    [Id]   INT        IDENTITY (1, 1) NOT NULL,
    [Name] NCHAR (50) NOT NULL,
    CONSTRAINT [PK_UserRoles] PRIMARY KEY CLUSTERED ([Id] ASC)
);

