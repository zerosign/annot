annot
=====

Based on visibility of [hypothesis.is](https://hypothesis.is) project
we might able to replicate what it does in distributed manner using
the help of [libp2p](https://github.com/libp2p/spec). By doing so,
we could provide distributed replicated social annotation platform
that exists on top logged CrDT data structure.


Visibility of Project
=====================

- can be packed into electron
- by using modified datastore (MVCC design), we might able to create
  independent store that resides between versions (branches).
-
