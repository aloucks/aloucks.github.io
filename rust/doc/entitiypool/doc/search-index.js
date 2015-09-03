var searchIndex = {};
searchIndex['entitypool'] = {"items":[[0,"","entitypool","",null,null],[3,"Entity","","",null,null],[3,"EntityPool","","",null,null],[11,"eq","","",0,{"inputs":[{"name":"entity"},{"name":"entity"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"entity"},{"name":"entity"}],"output":{"name":"bool"}}],[11,"clone","","",0,{"inputs":[{"name":"entity"}],"output":{"name":"entity"}}],[11,"default","","",0,{"inputs":[{"name":"entity"}],"output":{"name":"entity"}}],[11,"fmt","","",0,{"inputs":[{"name":"entity"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",0,{"inputs":[{"name":"entity"},{"name":"h"}],"output":null}],[11,"clone","","",1,{"inputs":[{"name":"entitypool"}],"output":{"name":"entitypool"}}],[11,"fmt","","",1,{"inputs":[{"name":"entitypool"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",1,{"inputs":[{"name":"entitypool"}],"output":{"name":"entitypool"}}],[11,"new","","Creates a new, empty `EntityPool`.",1,{"inputs":[{"name":"entitypool"}],"output":{"name":"entitypool"}}],[11,"with_capacity","","Creates a new, empty `EntityPool` with the specified capacities.",1,{"inputs":[{"name":"entitypool"},{"name":"usize"},{"name":"usize"}],"output":{"name":"entitypool"}}],[11,"create_entity","","Creates a unique entity.",1,null],[11,"return_entity","","Release ownership of the `entity`, allowing for it to be recycled. A recycled entity will\nhave it's internal generation incremented, yielding a new, unique entity.",1,{"inputs":[{"name":"entitypool"},{"name":"entity"}],"output":null}],[11,"index_of","","Returns the current `index` of the given `entity`, which is only guaranteed to remain\nvalid until the next call to `return_entity`.",1,{"inputs":[{"name":"entitypool"},{"name":"entity"}],"output":{"name":"usize"}}],[11,"entity_at","","Returns the current `entity` at the given `index`.",1,{"inputs":[{"name":"entitypool"},{"name":"usize"}],"output":{"name":"entity"}}],[11,"is_alive","","Returns `true` if this entity has not been returned.",1,{"inputs":[{"name":"entitypool"},{"name":"entity"}],"output":{"name":"bool"}}],[11,"iter","","Returns an iterator to the live entities. The `Enumerate` of the returned iterator will\nyield each `entity` and its current `index`.",1,{"inputs":[{"name":"entitypool"}],"output":{"name":"iter"}}],[11,"reset","","Resets the `EnitityPool` to its initial state, without releasing allocated capacity.",1,{"inputs":[{"name":"entitypool"}],"output":null}],[11,"reserve","","Reserves capacity for at least `additional` more entities to be created without\nreallocation. The pool may reserve more space to avoid frequesnt reallocations.",1,{"inputs":[{"name":"entitypool"},{"name":"usize"}],"output":null}],[11,"reserve_returned","","Reserves capacity for at least `additional` more entities to be returned without\nreallocation. The pool may reserve more space to avoid frequesnt reallocations.",1,{"inputs":[{"name":"entitypool"},{"name":"usize"}],"output":null}],[11,"shrink_to_fit","","Shrinks the capacity of this pool as much as possible.",1,{"inputs":[{"name":"entitypool"}],"output":null}],[11,"len","","Returns the number of live entities in this pool.",1,{"inputs":[{"name":"entitypool"}],"output":{"name":"usize"}}],[11,"len_returned","","Returns the number of returned entities in this pool that are ready to be recycled.",1,{"inputs":[{"name":"entitypool"}],"output":{"name":"usize"}}],[11,"capacity","","Returns the number of entities that this pool can create without reallocation.",1,{"inputs":[{"name":"entitypool"}],"output":{"name":"usize"}}],[11,"capacity_returned","","Returns the number of entities that can be returned without reallocation.",1,{"inputs":[{"name":"entitypool"}],"output":{"name":"usize"}}],[11,"index","","Returns the `entity` at the given `index`.",1,{"inputs":[{"name":"entitypool"},{"name":"u32"}],"output":{"name":"entity"}}],[11,"index","","Returns the index of the given `entity`.",1,{"inputs":[{"name":"entitypool"},{"name":"entity"}],"output":{"name":"u32"}}]],"paths":[[3,"Entity"],[3,"EntityPool"]]};
initSearch(searchIndex);
