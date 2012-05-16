# Bookit

A small webservice to store bookmarks. The service is based on a link will have
multiple levels of relations to make it possible to drill down to find similar
resources based on personal preference.

## Different relations type
 + Collection: Used to group tags across conceptual terms, for instance a unique term tag for a user
 + Conceptual: Terms that have a broad interest field like __programming__ or __social media__
 + Distinct: A sub-topic used to drill down for whitin one conceptual term e.g. __python__ will be a sub-topic of __programming__

This is just the client so more will come ones there is a API to connect to
